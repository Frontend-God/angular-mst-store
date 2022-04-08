import { Injectable } from '@angular/core';
import { createHttpClient } from 'mst-gql';
import { ModelCreationType } from 'mobx-state-tree';
import {
  animalBreedModelPrimitives,
  AnimalBreedModelType,
  RootStore,
  RootStoreType,
} from '../models';

let store: ModelCreationType<RootStoreType>;

export function getStore(snapshot = null): ModelCreationType<RootStoreType> {
  store = RootStore.create(undefined, {
    gqlHttpClient: createHttpClient('https://apitest.aji.digital/graphql'),
  });
  return store;
}

@Injectable({
  providedIn: 'root',
})
export class DataManagerService {
  store: ModelCreationType<RootStoreType>;

  constructor() {
    this.store = getStore();
  }

  async getAnimalBreed(animalBreedId: string): Promise<AnimalBreedModelType> {
    let animalBreed = await this.store.queryAnimalBreed({ id: animalBreedId });
    return animalBreed.animalBreed;
  }
}
