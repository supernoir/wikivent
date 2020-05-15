
import {
  Resource,
  AbstractInstanceType,
  SimpleResource,
  ReadShape,
  SchemaDetail,
} from 'rest-hooks';



/** Impelements the common functionality for all Resources we'll make */
export default abstract class BaseResource extends Resource {
  static detailShape<T extends typeof SimpleResource>(
    this: T,
  ): ReadShape<SchemaDetail<Readonly<AbstractInstanceType<T>>>> {
    const shape = super.detailShape();
    return {
      ...shape,
      fetch: async (params) => {
        const ret = await shape.fetch(params);
        if (typeof ret === "string") {
          return JSON.parse(ret)
        } else if (typeof ret === 'object' && ret !== null) {
          return ret
        } else {
          return {}
        }
      }
    }
  };
  static listShape<T extends typeof SimpleResource>(
    this: T,
  ): ReadShape<SchemaDetail<Readonly<AbstractInstanceType<T>>>> {
    const shape = super.listShape();
    return {
      ...shape,
      fetch: async (params) => {
        const ret = await shape.fetch(params);
        if (typeof ret === "string") {
          return JSON.parse(ret)
        } else if (typeof ret === 'object' && ret !== null) {
          return ret
        } else {
          return []
        }
      }
    }
  };
}
