import * as SQLite from 'expo-sqlite';

import Place from '../models/place';
import { IPlace } from '../common/types';

const database = SQLite.openDatabase('places.db');

export function init() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          latitude REAL NOT NULL,
          longitude REAL NOT NULL
        )`,
                [],
                (val) => {
                    resolve(val);
                },
                (_, error) => {
                    reject(error);
                    return false;
                }
            );
        });
    });

    return promise;
}

export function insertPlace(place: IPlace) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
                [
                    place.title,
                    place.imageUri,
                    place.address,
                    place.location.latitude,
                    place.location.longitude
                ],
                (_, result) => {
                    console.log(result);
                    resolve(result);
                },
                (_, error): any => {
                    reject(error);
                }
            );
        });
    });

    return promise;
}

export function fetchPlaces() {
    const promise = new Promise<IPlace[]>((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM places',
                [],
                (_, result) => {
                    const places = [];

                    for (const dp of result.rows._array) {
                        places.push(
                            new Place(
                                dp.title,
                                dp.imageUri,
                                dp.address,
                                dp.location
                            )
                        );
                    }
                    resolve(places);
                },
                (_, error): any => {
                    reject(error);
                }
            );
        });
    });

    return promise;
}
