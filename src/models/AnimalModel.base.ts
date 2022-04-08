/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AnimalBreedModel, AnimalBreedModelType } from "./AnimalBreedModel"
import { AnimalBreedModelSelector } from "./AnimalBreedModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  breed: AnimalBreedModelType;
}

/**
 * AnimalBase
 * auto generated base class for the model AnimalModel.
 *
 * Animal Entity - parent of all animal classes
 */
export const AnimalModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Animal')
  .props({
    __typename: types.optional(types.literal("Animal"), "Animal"),
    id: types.identifier,
    /** The entity ID */
    _id: types.union(types.undefined, types.integer),
    name: types.union(types.undefined, types.string),
    birthDate: types.union(types.undefined, types.string),
    comments: types.union(types.undefined, types.string),
    breed: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnimalBreedModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AnimalModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get _id() { return this.__attr(`_id`) }
  get name() { return this.__attr(`name`) }
  get birthDate() { return this.__attr(`birthDate`) }
  get comments() { return this.__attr(`comments`) }
  breed(builder?: string | AnimalBreedModelSelector | ((selector: AnimalBreedModelSelector) => AnimalBreedModelSelector)) { return this.__child(`breed`, AnimalBreedModelSelector, builder) }
}
export function selectFromAnimal() {
  return new AnimalModelSelector()
}

export const animalModelPrimitives = selectFromAnimal()._id.name.birthDate.comments
