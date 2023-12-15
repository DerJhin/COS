export interface Item {
    id: number,
    skin: {
        id: number,
        name: string,
        weapon: {
            name: string
        },
        hasPattern: boolean,
        rarity: string,
        image?: string
    },
    floatValue: number,
    floatString: string,
    patternNumber: 0,
    date: Date,
    statTrak: boolean,
    case?: string[]
}