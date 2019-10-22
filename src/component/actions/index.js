export const counterSum = (changedNum) => {
    return{
        type: "COUNTERSUM",
        payload: changedNum
    }
};

export const regenerateCounters = (numberOfCounters) => {
    return {
        type: "REGENERATE_COUNTERS",
        numberOfCounters: numberOfCounters
    };
};
