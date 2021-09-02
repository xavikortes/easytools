export const readDb = (db: string): object =>
    JSON.parse(localStorage.getItem(db)!)

export const writeDb = (db: string, value: object): void =>
    localStorage.setItem(db, JSON.stringify(value))
