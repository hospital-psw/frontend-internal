import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface DataTableItem {
  groupName: string;
  group1: number;
  group2: number;
  group3: number;
  group4: number;
  group5: number;
  group6: number;
}

export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = [];
  // angularJeSmece: DataTableItem[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(private parentData: DataTableItem[]) {
    super();
    this.data = parentData
  }

  setData() {
    this.getSortedData(this.data)
  }
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    if (this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.sort.sortChange)
        .pipe(map(() => {
          return this.getSortedData([...this.data]);
        }));
    } else {
      throw Error('Please sort on the data source before connecting.');
    }
  }

  disconnect(): void { }

  private getSortedData(data: DataTableItem[]): DataTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'group1': return compare(+a.group1, +b.group1, isAsc);
        case 'group2': return compare(+a.group2, +b.group2, isAsc);
        case 'group3': return compare(+a.group3, +b.group3, isAsc);
        case 'group4': return compare(+a.group4, +b.group4, isAsc);
        case 'group5': return compare(+a.group5, +b.group5, isAsc);
        case 'group6': return compare(+a.group6, +b.group6, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
