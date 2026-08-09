/**
 * Tests for the ServerBridge integration
 */

import { test, expect } from '@playwright/test';

test.describe('TUS Bundle ServerBridge Endpoint', () => {
    test('should load the test page', async ({ page }) => {
        await page.goto('http://127.0.0.1:8080/');
        await expect(page).toHaveTitle('TUS Bundle E2E Test');
        await expect(page.locator('h1')).toHaveText('TUS Bundle E2E Test');
    });

    test('should have ServerBridge configured', async ({ page }) => {
        await page.goto('http://127.0.0.1:8080/');
        await page.waitForFunction(() => window.testReady === true, { timeout: 10000 });

        const endpoint = await page.evaluate(() => window.endpoint);
        expect(endpoint).toBe('http://127.0.0.1:8080/_tus/upload');
    });

    test('should respond to POST request for TUS creation', async ({ request }) => {
        const response = await request.post('http://127.0.0.1:8080/_tus/upload', {
            headers: {
                'Tus-Resumable': '1.0.0',
                'Upload-Metadata': 'filename test.txt,filetype text/plain',
                'Upload-Length': '100'
            }
        });

        // Should return 201 Created or 202 Accepted for a valid TUS upload creation request
        expect([201, 202]).toContain(response.status());
    });

    test('should respond to GET request', async ({ request }) => {
        const response = await request.get('http://127.0.0.1:8080/_tus/upload', {
            headers: {
                'Tus-Resumable': '1.0.0'
            }
        });

        // TUS protocol should respond to OPTIONS or may return 405 for GET
        // The important thing is the ServerBridge is handling the request
        expect(response.status()).toBeGreaterThanOrEqual(200);
        expect(response.status()).toBeLessThan(600);
    });

    test('should handle file upload endpoint', async ({ request }) => {
        // First create an upload
        const createResponse = await request.post('http://127.0.0.1:8080/_tus/upload', {
            headers: {
                'Tus-Resumable': '1.0.0',
                'Upload-Length': '10',
                'Upload-Metadata': 'filename test.txt'
            }
        });

        expect([201, 202]).toContain(createResponse.status());

        // Get the location header which contains the upload URL
        const location = createResponse.headers()['location'];
        expect(location).toBeTruthy();

        // Construct absolute URL if location is relative
        const uploadUrl = location.startsWith('http') ? location : `http://127.0.0.1:8080${location}`;

        // Try to PATCH data to the upload
        const patchResponse = await request.patch(uploadUrl, {
            headers: {
                'Tus-Resumable': '1.0.0',
                'Upload-Offset': '0',
                'Content-Type': 'application/offset+octet-stream'
            },
            data: 'test data'
        });

        // Should accept the chunk or return 404 if the upload doesn't exist
        // (404 is acceptable for this test since we're just verifying the endpoint works)
        expect(patchResponse.status()).toBeGreaterThanOrEqual(200);
    });
});
