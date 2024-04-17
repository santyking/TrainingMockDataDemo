import { ISPListItem } from "./ISPListItem";
export default class MockClient {
    private static _listItems: ISPListItem[] = [
        { Id: "1", Title: "This is our company news" },
        { Id: "2", Title: "new Aircrafts launching soon" },
        { Id: "3", Title: "Leave Policy Updated" },
        { Id: "4", Title: "check Akasa Engage" },
        { Id: "5", Title: "Akasa Family Fly Policy" },
    ];
    public static get(restUrl: string, options?: any)
        : Promise<ISPListItem[]> {
        return new Promise<ISPListItem[]>((resolve) => {
            resolve(MockClient._listItems);
        });
    }
}
