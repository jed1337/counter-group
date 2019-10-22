export const counterSum = (changedNum) => {
    return{
        type: "COUNTERSUM",
        payload: changedNum
    }
};

export const assignCounters = (counters) => {
    return {
        type: "ASSIGN_COUNTERS",
        counters: counters
    };
};

export const regenerateCounters = (numberOfCounters) => {
    return {
        type: "REGENERATE_COUNTERS",
        numberOfCounters: numberOfCounters
    };
};
