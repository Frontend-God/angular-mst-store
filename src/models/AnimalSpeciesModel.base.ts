/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AnimalSpeciesBase
 * auto generated base class for the model AnimalSpeciesModel.
 *
 * Animal Entity - parent of all animal classes
 */
export const AnimalSpeciesModelBase = ModelBase
  .named('AnimalSpecies')
  .props({
    __typename: types.optional(types.literal("AnimalSpecies"), "AnimalSpecies"),
    id: types.identifier,
    _id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AnimalSpeciesModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get _id() { return this.__attr(`_id`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromAnimalSpecies() {
  return new AnimalSpeciesModelSelector()
}

export const animalSpeciesModelPrimitives = selectFromAnimalSpecies()._id.name
