import { Resource } from 'rest-hooks';
// import { EntryStatusType } from '../types/inventory/VentilatorModel';
// import { VentilatorApplicationType } from '../types/inventory/VentilatorTypes';

export default class VentilatorResource extends Resource {
  readonly data: [{ id: string }] = [{
    id: "614ae727-1f30-47b4-b1cf-a259b2851c25"
  }]

  /*   readonly id: string = '';
      readonly status: EntryStatusType | undefined = undefined;
      readonly type: VentilatorApplicationType | undefined = undefined;
      readonly make: string = '';
      readonly model: string = '';
      readonly series: string | undefined = '';
      readonly features: string[] = [];
      readonly specs: string[] | undefined = []
      readonly availability: string[] | undefined = [];
      readonly extlink: string | undefined = '';
      readonly sources: string[] | undefined = [];
      readonly regNumber: string = '';  */

  pk() {
    return this.data[0].id;
  }

  static urlRoot = 'http://localhost:8081/approved/get';
}