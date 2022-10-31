export interface Feedback {
    feedbackId: number;
    creator: string;
    message: string;
    anonymous: boolean;
    public: boolean;
    status: number;
}
