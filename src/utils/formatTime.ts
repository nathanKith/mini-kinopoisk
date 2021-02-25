export const formatTime = (time: string) : string => {
    const [h, m] = time.split(':');
    return `${h}h ${m}m`
};
