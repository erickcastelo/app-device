import {Category} from './Category';

export class Device {
    public id: number | string;
    public category_id: number;
    public color: string;
    public part_number: number;
    public created_at: string;
    public updated_at: string;
    public category: Category;
}
