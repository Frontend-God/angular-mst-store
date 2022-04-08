/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AnimalModel, AnimalModelType } from "./AnimalModel"
import { AnimalModelSelector } from "./AnimalModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  animal: AnimalModelType;
}

/**
 * UpdateAnimalPayloadBase
 * auto generated base class for the model UpdateAnimalPayloadModel.
 *
 * Animal Entity - parent of all animal classes
 */
export const UpdateAnimalPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateAnimalPayload')
  .props({
    __typename: types.optional(types.literal("updateAnimalPayload"), "updateAnimalPayload"),
    animal: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnimalModel))),
    clientMutationId: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateAnimalPayloadModelSelector extends QueryBuilder {
  get clientMutationId() { return this.__attr(`clientMutationId`) }
  animal(builder?: string | AnimalModelSelector | ((selector: AnimalModelSelector) => AnimalModelSelector)) { return this.__child(`animal`, AnimalModelSelector, builder) }
}
export function selectFromUpdateAnimalPayload() {
  return new UpdateAnimalPayloadModelSelector()
}

export const updateAnimalPayloadModelPrimitives = selectFromUpdateAnimalPayload().clientMutationId
