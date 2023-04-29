export const reorder = <T>(list: T[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const move = <T>(source: T[], destination: T[], sourceIndex: number, destinationIndex: number, sourceId: number, destinationId: number) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(sourceIndex, 1);

    destClone.splice(destinationIndex, 0, removed);

    const result = [];
    result[sourceId] = sourceClone;
    result[destinationId] = destClone;

    return result;
};