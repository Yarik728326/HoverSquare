export const fieldSizeHandler = (size) => {
    const fields  = [];

    for (let i = 0; i < size; i++) {
        fields.push({
            isActive: false,
            position: i + 1
        })
    }
    return fields
}