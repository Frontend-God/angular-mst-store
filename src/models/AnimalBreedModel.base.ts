/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AnimalSpeciesModel, AnimalSpeciesModelType } from "./AnimalSpeciesModel"
import { AnimalSpeciesModelSelector } from "./AnimalSpeciesModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  species: AnimalSpeciesModelType;
}

/**
 * AnimalBreedBase
 * auto generated base class for the model AnimalBreedModel.
 *
 * Animal Breed Subtype of the Animal Species
 */
export const AnimalBreedModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AnimalBreed')
  .props({
    __typename: types.optional(types.literal("AnimalBreed"), "AnimalBreed"),
    id: types.identifier,
    _id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    species: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnimalSpeciesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AnimalBreedModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get _id() { return this.__attr(`_id`) }
  get name() { return this.__attr(`name`) }
  species(builder?: string | AnimalSpeciesModelSelector | ((selector: AnimalSpeciesModelSelector) => AnimalSpeciesModelSelector)) { return this.__child(`species`, AnimalSpeciesModelSelector, builder) }
}
export function selectFromAnimalBreed() {
  return new AnimalBreedModelSelector()
}

export const animalBreedModelPrimitives = selectFromAnimalBreed()._id.name
