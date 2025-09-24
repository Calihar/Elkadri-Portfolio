import { Documentations } from "./documentations";
import { Feature } from "./feature";

export interface ProjectOverview {
	  id: string;
	  title: string;
	  shortDescription: string;
	  highlights?: string[];
	  thumbnailUrl: string;
	  demo: boolean;
	  features?: Feature[];
	  documentations?: Documentations[];
}
