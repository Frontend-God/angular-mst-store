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
 * DeleteAnimalSpeciesPayloadBase
 * auto generated base class for the model DeleteAnimalSpeciesPayloadModel.
 *
 * Animal Entity - parent of all animal classes
 */
export const DeleteAnimalSpeciesPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteAnimalSpeciesPayload')
  .props({
    __typename: types.optional(types.literal("deleteAnimalSpeciesPayload"), "deleteAnimalSpeciesPayload"),
    animalSpecies: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnimalSpeciesModel))),
    clientMutationId: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteAnimalSpeciesPayloadModelSelector extends QueryBuilder {
  get clientMutationId() { return this.__attr(`clientMutationId`) }
  animalSpecies(builder?: string | AnimalSpeciesModelSelector | ((selector: AnimalSpeciesModelSelector) => AnimalSpeciesModelSelector)) { return this.__child(`animalSpecies`, AnimalSpeciesModelSelector, builder) }
}
export function selectFromDeleteAnimalSpeciesPayload() {
  return new DeleteAnimalSpeciesPayloadModelSelector()
}

export const deleteAnimalSpeciesPayloadModelPrimitives = selectFromDeleteAnimalSpeciesPayload().clientMutationId
