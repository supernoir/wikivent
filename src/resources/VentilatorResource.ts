import BaseResource from './BaseResource';

export default class VentilatorResource extends BaseResource {
  readonly features: string[] = [];
  readonly id: string = "";
  readonly link: string = "";
  readonly make: string = "";
  readonly model: string = "";
  readonly type: string = "";

  pk() {
    return this.id;
  }

  static urlRoot = 'http://localhost:8081/approved/get';
}

/*

  TODO: implement EXTENDED VENTILATOR RESOURCE
  readonly id: string,
  readonly status: EntryStatusType | undefined,
  readonly type: VentilatorApplicationType | undefined,
  readonly make: string,
  readonly model: string,
  readonly series: string | undefined,
  readonly features: string[],
  readonly specs: string[] | undefined,
  readonly availability: string[] | undefined,
  readonly extlink: string | undefined,
  readonly sources: string[] | undefined,
  readonly regNumber: string
  */