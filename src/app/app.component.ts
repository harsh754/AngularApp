import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:false
})
export class AppComponent {
  title = 'Hello i want to learn ';
  checkngif=true;
  isvalid:boolean=true;
  changevalue(valid){
    this.isvalid=valid;
  }

  Students:any[]=[
    {
  'name':'Rahul Kumar'
  },
  {
    'name':'Ajeet Kumar'
  },
  {
    'name':'Rohan Kumar'

  },
  {
    'name':'Mahesh Kumar'
  },
  {
    'name':'Amkit Kumar'
  }
  ];

btnclick()
{
  alert("you clicked me");
}

  public choose='';
setvalue(drp:any)
{
  this.choose=drp.target.value;

}
}
