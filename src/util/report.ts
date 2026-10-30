type CaptureContext = {
    extra: { [x: string]: unknown },
};
type EventHint = {
    data?: unknown,
};

/** Log errors locally only, nothing is sent to any remote service. */
export const captureException = async (
    e: unknown,
    context?: CaptureContext,
    hint?: EventHint,
) => {
    console.error(e, context?.extra ?? hint?.data ?? '');
};
