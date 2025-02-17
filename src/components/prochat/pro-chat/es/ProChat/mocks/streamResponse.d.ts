export declare class MockResponse {
    private data;
    private delay;
    private controller;
    private encoder;
    private stream;
    private error;
    constructor(data: string, delay?: number, error?: boolean);
    private pushData;
    getResponse(): Promise<Response>;
}
