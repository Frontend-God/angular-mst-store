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
 * UpdateAnimalBreedPayloadBase
 * auto generated base class for the model UpdateAnimalBreedPayloadModel.
 *
 * Animal Breed Subtype of the Animal Species
 */
export const UpdateAnimalBreedPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateAnimalBreedPayload')
  .props({
    __typename: types.optional(types.literal("updateAnimalBreedPayload"), "updateAnimalBreedPayload"),
    animalBreed: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnimalBreedModel))),
    clientMutationId: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateAnimalBreedPayloadModelSelector extends QueryBuilder {
  get clientMutationId() { return this.__attr(`clientMutationId`) }
  animalBreed(builder?: string | AnimalBreedModelSelector | ((selector: AnimalBreedModelSelector) => AnimalBreedModelSelector)) { return this.__child(`animalBreed`, AnimalBreedModelSelector, builder) }
}
export function selectFromUpdateAnimalBreedPayload() {
  return new UpdateAnimalBreedPayloadModelSelector()
}

export const updateAnimalBreedPayloadModelPrimitives = selectFromUpdateAnimalBreedPayload().clientMutationId
