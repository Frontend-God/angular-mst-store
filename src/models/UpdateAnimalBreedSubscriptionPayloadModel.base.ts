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
  animalBreed: AnimalBreedModelType;
}

/**
 * UpdateAnimalBreedSubscriptionPayloadBase
 * auto generated base class for the model UpdateAnimalBreedSubscriptionPayloadModel.
 *
 * Animal Breed Subtype of the Animal Species
 */
export const UpdateAnimalBreedSubscriptionPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateAnimalBreedSubscriptionPayload')
  .props({
    __typename: types.optional(types.literal("updateAnimalBreedSubscriptionPayload"), "updateAnimalBreedSubscriptionPayload"),
    animalBreed: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnimalBreedModel))),
    clientSubscriptionId: types.union(types.undefined, types.null, types.string),
    mercureUrl: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateAnimalBreedSubscriptionPayloadModelSelector extends QueryBuilder {
  get clientSubscriptionId() { return this.__attr(`clientSubscriptionId`) }
  get mercureUrl() { return this.__attr(`mercureUrl`) }
  animalBreed(builder?: string | AnimalBreedModelSelector | ((selector: AnimalBreedModelSelector) => AnimalBreedModelSelector)) { return this.__child(`animalBreed`, AnimalBreedModelSelector, builder) }
}
export function selectFromUpdateAnimalBreedSubscriptionPayload() {
  return new UpdateAnimalBreedSubscriptionPayloadModelSelector()
}

export const updateAnimalBreedSubscriptionPayloadModelPrimitives = selectFromUpdateAnimalBreedSubscriptionPayload().clientSubscriptionId.mercureUrl
