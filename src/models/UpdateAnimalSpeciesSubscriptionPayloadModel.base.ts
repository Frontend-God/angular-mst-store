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
  animalSpecies: AnimalSpeciesModelType;
}

/**
 * UpdateAnimalSpeciesSubscriptionPayloadBase
 * auto generated base class for the model UpdateAnimalSpeciesSubscriptionPayloadModel.
 *
 * Animal Entity - parent of all animal classes
 */
export const UpdateAnimalSpeciesSubscriptionPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateAnimalSpeciesSubscriptionPayload')
  .props({
    __typename: types.optional(types.literal("updateAnimalSpeciesSubscriptionPayload"), "updateAnimalSpeciesSubscriptionPayload"),
    animalSpecies: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnimalSpeciesModel))),
    clientSubscriptionId: types.union(types.undefined, types.null, types.string),
    mercureUrl: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateAnimalSpeciesSubscriptionPayloadModelSelector extends QueryBuilder {
  get clientSubscriptionId() { return this.__attr(`clientSubscriptionId`) }
  get mercureUrl() { return this.__attr(`mercureUrl`) }
  animalSpecies(builder?: string | AnimalSpeciesModelSelector | ((selector: AnimalSpeciesModelSelector) => AnimalSpeciesModelSelector)) { return this.__child(`animalSpecies`, AnimalSpeciesModelSelector, builder) }
}
export function selectFromUpdateAnimalSpeciesSubscriptionPayload() {
  return new UpdateAnimalSpeciesSubscriptionPayloadModelSelector()
}

export const updateAnimalSpeciesSubscriptionPayloadModelPrimitives = selectFromUpdateAnimalSpeciesSubscriptionPayload().clientSubscriptionId.mercureUrl
