/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { AnimalModel, AnimalModelType } from "./AnimalModel"
import { animalModelPrimitives, AnimalModelSelector } from "./AnimalModel.base"
import { AnimalBreedModel, AnimalBreedModelType } from "./AnimalBreedModel"
import { animalBreedModelPrimitives, AnimalBreedModelSelector } from "./AnimalBreedModel.base"
import { AnimalSpeciesModel, AnimalSpeciesModelType } from "./AnimalSpeciesModel"
import { animalSpeciesModelPrimitives, AnimalSpeciesModelSelector } from "./AnimalSpeciesModel.base"
import { AnimalConnectionModel, AnimalConnectionModelType } from "./AnimalConnectionModel"
import { animalConnectionModelPrimitives, AnimalConnectionModelSelector } from "./AnimalConnectionModel.base"
import { AnimalEdgeModel, AnimalEdgeModelType } from "./AnimalEdgeModel"
import { animalEdgeModelPrimitives, AnimalEdgeModelSelector } from "./AnimalEdgeModel.base"
import { AnimalPageInfoModel, AnimalPageInfoModelType } from "./AnimalPageInfoModel"
import { animalPageInfoModelPrimitives, AnimalPageInfoModelSelector } from "./AnimalPageInfoModel.base"
import { AnimalBreedConnectionModel, AnimalBreedConnectionModelType } from "./AnimalBreedConnectionModel"
import { animalBreedConnectionModelPrimitives, AnimalBreedConnectionModelSelector } from "./AnimalBreedConnectionModel.base"
import { AnimalBreedEdgeModel, AnimalBreedEdgeModelType } from "./AnimalBreedEdgeModel"
import { animalBreedEdgeModelPrimitives, AnimalBreedEdgeModelSelector } from "./AnimalBreedEdgeModel.base"
import { AnimalBreedPageInfoModel, AnimalBreedPageInfoModelType } from "./AnimalBreedPageInfoModel"
import { animalBreedPageInfoModelPrimitives, AnimalBreedPageInfoModelSelector } from "./AnimalBreedPageInfoModel.base"
import { DeleteAnimalPayloadModel, DeleteAnimalPayloadModelType } from "./DeleteAnimalPayloadModel"
import { deleteAnimalPayloadModelPrimitives, DeleteAnimalPayloadModelSelector } from "./DeleteAnimalPayloadModel.base"
import { UpdateAnimalPayloadModel, UpdateAnimalPayloadModelType } from "./UpdateAnimalPayloadModel"
import { updateAnimalPayloadModelPrimitives, UpdateAnimalPayloadModelSelector } from "./UpdateAnimalPayloadModel.base"
import { CreateAnimalPayloadModel, CreateAnimalPayloadModelType } from "./CreateAnimalPayloadModel"
import { createAnimalPayloadModelPrimitives, CreateAnimalPayloadModelSelector } from "./CreateAnimalPayloadModel.base"
import { DeleteAnimalBreedPayloadModel, DeleteAnimalBreedPayloadModelType } from "./DeleteAnimalBreedPayloadModel"
import { deleteAnimalBreedPayloadModelPrimitives, DeleteAnimalBreedPayloadModelSelector } from "./DeleteAnimalBreedPayloadModel.base"
import { UpdateAnimalBreedPayloadModel, UpdateAnimalBreedPayloadModelType } from "./UpdateAnimalBreedPayloadModel"
import { updateAnimalBreedPayloadModelPrimitives, UpdateAnimalBreedPayloadModelSelector } from "./UpdateAnimalBreedPayloadModel.base"
import { CreateAnimalBreedPayloadModel, CreateAnimalBreedPayloadModelType } from "./CreateAnimalBreedPayloadModel"
import { createAnimalBreedPayloadModelPrimitives, CreateAnimalBreedPayloadModelSelector } from "./CreateAnimalBreedPayloadModel.base"
import { DeleteAnimalSpeciesPayloadModel, DeleteAnimalSpeciesPayloadModelType } from "./DeleteAnimalSpeciesPayloadModel"
import { deleteAnimalSpeciesPayloadModelPrimitives, DeleteAnimalSpeciesPayloadModelSelector } from "./DeleteAnimalSpeciesPayloadModel.base"
import { UpdateAnimalSpeciesPayloadModel, UpdateAnimalSpeciesPayloadModelType } from "./UpdateAnimalSpeciesPayloadModel"
import { updateAnimalSpeciesPayloadModelPrimitives, UpdateAnimalSpeciesPayloadModelSelector } from "./UpdateAnimalSpeciesPayloadModel.base"
import { CreateAnimalSpeciesPayloadModel, CreateAnimalSpeciesPayloadModelType } from "./CreateAnimalSpeciesPayloadModel"
import { createAnimalSpeciesPayloadModelPrimitives, CreateAnimalSpeciesPayloadModelSelector } from "./CreateAnimalSpeciesPayloadModel.base"
import { UpdateAnimalSubscriptionPayloadModel, UpdateAnimalSubscriptionPayloadModelType } from "./UpdateAnimalSubscriptionPayloadModel"
import { updateAnimalSubscriptionPayloadModelPrimitives, UpdateAnimalSubscriptionPayloadModelSelector } from "./UpdateAnimalSubscriptionPayloadModel.base"
import { UpdateAnimalBreedSubscriptionPayloadModel, UpdateAnimalBreedSubscriptionPayloadModelType } from "./UpdateAnimalBreedSubscriptionPayloadModel"
import { updateAnimalBreedSubscriptionPayloadModelPrimitives, UpdateAnimalBreedSubscriptionPayloadModelSelector } from "./UpdateAnimalBreedSubscriptionPayloadModel.base"
import { UpdateAnimalSpeciesSubscriptionPayloadModel, UpdateAnimalSpeciesSubscriptionPayloadModelType } from "./UpdateAnimalSpeciesSubscriptionPayloadModel"
import { updateAnimalSpeciesSubscriptionPayloadModelPrimitives, UpdateAnimalSpeciesSubscriptionPayloadModelSelector } from "./UpdateAnimalSpeciesSubscriptionPayloadModel.base"

import { nodeModelPrimitives, NodeModelSelector , NodeUnion } from "./"


export type DeleteAnimalInput = {
  id: string
  clientMutationId?: string
}
export type UpdateAnimalInput = {
  id: string
  name?: string
  birthDate?: string
  comments?: string
  breed?: string
  clientMutationId?: string
}
export type CreateAnimalInput = {
  name: string
  birthDate: string
  comments: string
  breed?: string
  clientMutationId?: string
}
export type DeleteAnimalBreedInput = {
  id: string
  clientMutationId?: string
}
export type UpdateAnimalBreedInput = {
  id: string
  name?: string
  species?: string
  clientMutationId?: string
}
export type CreateAnimalBreedInput = {
  name: string
  species?: string
  clientMutationId?: string
}
export type DeleteAnimalSpeciesInput = {
  id: string
  clientMutationId?: string
}
export type UpdateAnimalSpeciesInput = {
  id: string
  name?: string
  clientMutationId?: string
}
export type CreateAnimalSpeciesInput = {
  name: string
  clientMutationId?: string
}
export type UpdateAnimalSubscriptionInput = {
  id: string
  clientSubscriptionId?: string
}
export type UpdateAnimalBreedSubscriptionInput = {
  id: string
  clientSubscriptionId?: string
}
export type UpdateAnimalSpeciesSubscriptionInput = {
  id: string
  clientSubscriptionId?: string
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  animals: ObservableMap<string, AnimalModelType>,
  animalBreeds: ObservableMap<string, AnimalBreedModelType>,
  animalSpecies: ObservableMap<string, AnimalSpeciesModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryNode="queryNode",
queryAnimal="queryAnimal",
queryAnimals="queryAnimals",
queryAnimalBreed="queryAnimalBreed",
queryAnimalBreeds="queryAnimalBreeds",
queryAnimalSpecies="queryAnimalSpecies"
}
export enum RootStoreBaseMutations {
mutateDeleteAnimal="mutateDeleteAnimal",
mutateUpdateAnimal="mutateUpdateAnimal",
mutateCreateAnimal="mutateCreateAnimal",
mutateDeleteAnimalBreed="mutateDeleteAnimalBreed",
mutateUpdateAnimalBreed="mutateUpdateAnimalBreed",
mutateCreateAnimalBreed="mutateCreateAnimalBreed",
mutateDeleteAnimalSpecies="mutateDeleteAnimalSpecies",
mutateUpdateAnimalSpecies="mutateUpdateAnimalSpecies",
mutateCreateAnimalSpecies="mutateCreateAnimalSpecies"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['Animal', () => AnimalModel], ['AnimalBreed', () => AnimalBreedModel], ['AnimalSpecies', () => AnimalSpeciesModel], ['AnimalConnection', () => AnimalConnectionModel], ['AnimalEdge', () => AnimalEdgeModel], ['AnimalPageInfo', () => AnimalPageInfoModel], ['AnimalBreedConnection', () => AnimalBreedConnectionModel], ['AnimalBreedEdge', () => AnimalBreedEdgeModel], ['AnimalBreedPageInfo', () => AnimalBreedPageInfoModel], ['deleteAnimalPayload', () => DeleteAnimalPayloadModel], ['updateAnimalPayload', () => UpdateAnimalPayloadModel], ['createAnimalPayload', () => CreateAnimalPayloadModel], ['deleteAnimalBreedPayload', () => DeleteAnimalBreedPayloadModel], ['updateAnimalBreedPayload', () => UpdateAnimalBreedPayloadModel], ['createAnimalBreedPayload', () => CreateAnimalBreedPayloadModel], ['deleteAnimalSpeciesPayload', () => DeleteAnimalSpeciesPayloadModel], ['updateAnimalSpeciesPayload', () => UpdateAnimalSpeciesPayloadModel], ['createAnimalSpeciesPayload', () => CreateAnimalSpeciesPayloadModel], ['updateAnimalSubscriptionPayload', () => UpdateAnimalSubscriptionPayloadModel], ['updateAnimalBreedSubscriptionPayload', () => UpdateAnimalBreedSubscriptionPayloadModel], ['updateAnimalSpeciesSubscriptionPayload', () => UpdateAnimalSpeciesSubscriptionPayloadModel]], ['Animal', 'AnimalBreed', 'AnimalSpecies'], "js"))
  .props({
    animals: types.optional(types.map(types.late((): any => AnimalModel)), {}),
    animalBreeds: types.optional(types.map(types.late((): any => AnimalBreedModel)), {}),
    animalSpecies: types.optional(types.map(types.late((): any => AnimalSpeciesModel)), {})
  })
  .actions(self => ({
    queryNode(variables: { id: string }, resultSelector: string | ((qb: NodeModelSelector) => NodeModelSelector) = nodeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ node: NodeUnion}>(`query node($id: ID!) { node(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new NodeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAnimal(variables: { id: string }, resultSelector: string | ((qb: AnimalModelSelector) => AnimalModelSelector) = animalModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ animal: AnimalModelType}>(`query animal($id: ID!) { animal(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new AnimalModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAnimals(variables: { first?: number, last?: number, before?: string, after?: string }, resultSelector: string | ((qb: AnimalConnectionModelSelector) => AnimalConnectionModelSelector) = animalConnectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ animals: AnimalConnectionModelType}>(`query animals($first: Int, $last: Int, $before: String, $after: String) { animals(first: $first, last: $last, before: $before, after: $after) {
        ${typeof resultSelector === "function" ? resultSelector(new AnimalConnectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAnimalBreed(variables: { id: string }, resultSelector: string | ((qb: AnimalBreedModelSelector) => AnimalBreedModelSelector) = animalBreedModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ animalBreed: AnimalBreedModelType}>(`query animalBreed($id: ID!) { animalBreed(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new AnimalBreedModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAnimalBreeds(variables: { first?: number, last?: number, before?: string, after?: string }, resultSelector: string | ((qb: AnimalBreedConnectionModelSelector) => AnimalBreedConnectionModelSelector) = animalBreedConnectionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ animalBreeds: AnimalBreedConnectionModelType}>(`query animalBreeds($first: Int, $last: Int, $before: String, $after: String) { animalBreeds(first: $first, last: $last, before: $before, after: $after) {
        ${typeof resultSelector === "function" ? resultSelector(new AnimalBreedConnectionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAnimalSpecies(variables: { id: string }, resultSelector: string | ((qb: AnimalSpeciesModelSelector) => AnimalSpeciesModelSelector) = animalSpeciesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ animalSpecies: AnimalSpeciesModelType}>(`query animalSpecies($id: ID!) { animalSpecies(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new AnimalSpeciesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // Deletes a Animal.
    mutateDeleteAnimal(variables: { input: DeleteAnimalInput }, resultSelector: string | ((qb: DeleteAnimalPayloadModelSelector) => DeleteAnimalPayloadModelSelector) = deleteAnimalPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAnimal: DeleteAnimalPayloadModelType}>(`mutation deleteAnimal($input: deleteAnimalInput!) { deleteAnimal(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteAnimalPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Updates a Animal.
    mutateUpdateAnimal(variables: { input: UpdateAnimalInput }, resultSelector: string | ((qb: UpdateAnimalPayloadModelSelector) => UpdateAnimalPayloadModelSelector) = updateAnimalPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAnimal: UpdateAnimalPayloadModelType}>(`mutation updateAnimal($input: updateAnimalInput!) { updateAnimal(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateAnimalPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Creates a Animal.
    mutateCreateAnimal(variables: { input: CreateAnimalInput }, resultSelector: string | ((qb: CreateAnimalPayloadModelSelector) => CreateAnimalPayloadModelSelector) = createAnimalPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createAnimal: CreateAnimalPayloadModelType}>(`mutation createAnimal($input: createAnimalInput!) { createAnimal(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new CreateAnimalPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Deletes a AnimalBreed.
    mutateDeleteAnimalBreed(variables: { input: DeleteAnimalBreedInput }, resultSelector: string | ((qb: DeleteAnimalBreedPayloadModelSelector) => DeleteAnimalBreedPayloadModelSelector) = deleteAnimalBreedPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAnimalBreed: DeleteAnimalBreedPayloadModelType}>(`mutation deleteAnimalBreed($input: deleteAnimalBreedInput!) { deleteAnimalBreed(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteAnimalBreedPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Updates a AnimalBreed.
    mutateUpdateAnimalBreed(variables: { input: UpdateAnimalBreedInput }, resultSelector: string | ((qb: UpdateAnimalBreedPayloadModelSelector) => UpdateAnimalBreedPayloadModelSelector) = updateAnimalBreedPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAnimalBreed: UpdateAnimalBreedPayloadModelType}>(`mutation updateAnimalBreed($input: updateAnimalBreedInput!) { updateAnimalBreed(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateAnimalBreedPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Creates a AnimalBreed.
    mutateCreateAnimalBreed(variables: { input: CreateAnimalBreedInput }, resultSelector: string | ((qb: CreateAnimalBreedPayloadModelSelector) => CreateAnimalBreedPayloadModelSelector) = createAnimalBreedPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createAnimalBreed: CreateAnimalBreedPayloadModelType}>(`mutation createAnimalBreed($input: createAnimalBreedInput!) { createAnimalBreed(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new CreateAnimalBreedPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Deletes a AnimalSpecies.
    mutateDeleteAnimalSpecies(variables: { input: DeleteAnimalSpeciesInput }, resultSelector: string | ((qb: DeleteAnimalSpeciesPayloadModelSelector) => DeleteAnimalSpeciesPayloadModelSelector) = deleteAnimalSpeciesPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAnimalSpecies: DeleteAnimalSpeciesPayloadModelType}>(`mutation deleteAnimalSpecies($input: deleteAnimalSpeciesInput!) { deleteAnimalSpecies(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteAnimalSpeciesPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Updates a AnimalSpecies.
    mutateUpdateAnimalSpecies(variables: { input: UpdateAnimalSpeciesInput }, resultSelector: string | ((qb: UpdateAnimalSpeciesPayloadModelSelector) => UpdateAnimalSpeciesPayloadModelSelector) = updateAnimalSpeciesPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAnimalSpecies: UpdateAnimalSpeciesPayloadModelType}>(`mutation updateAnimalSpecies($input: updateAnimalSpeciesInput!) { updateAnimalSpecies(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateAnimalSpeciesPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Creates a AnimalSpecies.
    mutateCreateAnimalSpecies(variables: { input: CreateAnimalSpeciesInput }, resultSelector: string | ((qb: CreateAnimalSpeciesPayloadModelSelector) => CreateAnimalSpeciesPayloadModelSelector) = createAnimalSpeciesPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createAnimalSpecies: CreateAnimalSpeciesPayloadModelType}>(`mutation createAnimalSpecies($input: createAnimalSpeciesInput!) { createAnimalSpecies(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new CreateAnimalSpeciesPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // Subscribes to the update event of a Animal.
    subscribeUpdateAnimalSubscribe(variables: { input: UpdateAnimalSubscriptionInput }, resultSelector: string | ((qb: UpdateAnimalSubscriptionPayloadModelSelector) => UpdateAnimalSubscriptionPayloadModelSelector) = updateAnimalSubscriptionPayloadModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ updateAnimalSubscribe: UpdateAnimalSubscriptionPayloadModelType}>(`subscription updateAnimalSubscribe($input: updateAnimalSubscriptionInput!) { updateAnimalSubscribe(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateAnimalSubscriptionPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // Subscribes to the update event of a AnimalBreed.
    subscribeUpdateAnimalBreedSubscribe(variables: { input: UpdateAnimalBreedSubscriptionInput }, resultSelector: string | ((qb: UpdateAnimalBreedSubscriptionPayloadModelSelector) => UpdateAnimalBreedSubscriptionPayloadModelSelector) = updateAnimalBreedSubscriptionPayloadModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ updateAnimalBreedSubscribe: UpdateAnimalBreedSubscriptionPayloadModelType}>(`subscription updateAnimalBreedSubscribe($input: updateAnimalBreedSubscriptionInput!) { updateAnimalBreedSubscribe(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateAnimalBreedSubscriptionPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // Subscribes to the update event of a AnimalSpecies.
    subscribeUpdateAnimalSpeciesSubscribe(variables: { input: UpdateAnimalSpeciesSubscriptionInput }, resultSelector: string | ((qb: UpdateAnimalSpeciesSubscriptionPayloadModelSelector) => UpdateAnimalSpeciesSubscriptionPayloadModelSelector) = updateAnimalSpeciesSubscriptionPayloadModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ updateAnimalSpeciesSubscribe: UpdateAnimalSpeciesSubscriptionPayloadModelType}>(`subscription updateAnimalSpeciesSubscribe($input: updateAnimalSpeciesSubscriptionInput!) { updateAnimalSpeciesSubscribe(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateAnimalSpeciesSubscriptionPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
  })))
