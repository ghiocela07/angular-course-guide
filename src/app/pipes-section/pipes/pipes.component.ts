import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  filteredStatus = '';
  sortField = '';
  sortFields = ['name', 'status', 'instanceType', 'started'];
  statuses = ['stable', 'offline', 'critical'];
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000)
  });
  availableSortFields = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.sortFields);
    }, 2000)
  });
  availableStatuses = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.statuses);
    }, 2000)
  });
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  getStatusClasses(server: { instanceType: string, name: string, status: string, started: Date }) {
    return {
      'server-item-success': server.status === 'stable',
      'server-item-warning': server.status === 'offline',
      'server-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'medium',
      name: 'Production',
      status: 'critical',
      started: new Date(15, 1, 2017)

    })
  }
}