export interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    dbDocRef: any | null;
    // add any other properties you need from the Firebase User object
  }