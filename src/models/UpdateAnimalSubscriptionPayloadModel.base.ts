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
 * UpdateAnimalSubscriptionPayloadBase
 * auto generated base class for the model UpdateAnimalSubscriptionPayloadModel.
 *
 * Animal Entity - parent of all animal classes
 */
export const UpdateAnimalSubscriptionPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateAnimalSubscriptionPayload')
  .props({
    __typename: types.optional(types.literal("updateAnimalSubscriptionPayload"), "updateAnimalSubscriptionPayload"),
    animal: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnimalModel))),
    clientSubscriptionId: types.union(types.undefined, types.null, types.string),
    mercureUrl: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateAnimalSubscriptionPayloadModelSelector extends QueryBuilder {
  get clientSubscriptionId() { return this.__attr(`clientSubscriptionId`) }
  get mercureUrl() { return this.__attr(`mercureUrl`) }
  animal(builder?: string | AnimalModelSelector | ((selector: AnimalModelSelector) => AnimalModelSelector)) { return this.__child(`animal`, AnimalModelSelector, builder) }
}
export function selectFromUpdateAnimalSubscriptionPayload() {
  return new UpdateAnimalSubscriptionPayloadModelSelector()
}

export const updateAnimalSubscriptionPayloadModelPrimitives = selectFromUpdateAnimalSubscriptionPayload().clientSubscriptionId.mercureUrl
