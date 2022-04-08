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
 * CreateAnimalBreedPayloadBase
 * auto generated base class for the model CreateAnimalBreedPayloadModel.
 *
 * Animal Breed Subtype of the Animal Species
 */
export const CreateAnimalBreedPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CreateAnimalBreedPayload')
  .props({
    __typename: types.optional(types.literal("createAnimalBreedPayload"), "createAnimalBreedPayload"),
    animalBreed: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnimalBreedModel))),
    clientMutationId: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CreateAnimalBreedPayloadModelSelector extends QueryBuilder {
  get clientMutationId() { return this.__attr(`clientMutationId`) }
  animalBreed(builder?: string | AnimalBreedModelSelector | ((selector: AnimalBreedModelSelector) => AnimalBreedModelSelector)) { return this.__child(`animalBreed`, AnimalBreedModelSelector, builder) }
}
export function selectFromCreateAnimalBreedPayload() {
  return new CreateAnimalBreedPayloadModelSelector()
}

export const createAnimalBreedPayloadModelPrimitives = selectFromCreateAnimalBreedPayload().clientMutationId
