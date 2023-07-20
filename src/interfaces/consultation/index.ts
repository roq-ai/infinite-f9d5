import { DoctorInterface } from 'interfaces/doctor';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ConsultationInterface {
  id?: string;
  date: any;
  doctor_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  doctor?: DoctorInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface ConsultationGetQueryInterface extends GetQueryInterface {
  id?: string;
  doctor_id?: string;
  organization_id?: string;
}
