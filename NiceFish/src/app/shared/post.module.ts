import { NgModule } from "@angular/core";

import { DataTableModule } from "primeng/components/datatable/datatable";
import { CalendarModule } from "primeng/components/calendar/calendar";

import { SharedModule } from "./shared.module";

import { CommentTableComponent } from "../manage/content-mng/comment-table/comment-table.component";
import { PostTableComponent } from "../manage/content-mng/post-table/post-table.component";

@NgModule({
  imports: [
    SharedModule,
    DataTableModule,
    CalendarModule
  ],
  declarations: [
    CommentTableComponent,
    PostTableComponent
  ],
  exports: [
    CommentTableComponent,
    PostTableComponent
  ]
})

export class PostSharedModule {

}
