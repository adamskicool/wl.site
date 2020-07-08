import { EGoogleChartType } from "@/types/enums/google-chart-type";

export interface IGoogleChartInput {
  type: EGoogleChartType;
  labels: string[];
  data: any[][]; //TODO: Write validator for the structure of this.
}
