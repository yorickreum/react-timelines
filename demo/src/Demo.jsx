import React from 'react'
import Timeline from 'react-timelines'

const Demo = () => (
  <Timeline
    clickElement={(e) => { alert('Clicked ' + JSON.stringify(e)) }}
    scale={{
      start: new Date('2020-06-01'),
      end: new Date('2020-06-08'),
      zoom: 200
    }}
    timebar={[
      {
        id: 'row-id',
        title: 'Day',
        useAsGrid: true,
        cells: [
          {
            id: '2020-06-01',
            title: 'Monday',
            start: new Date('2020-06-01'),
            end: new Date('2020-06-02')
          },
          {
            id: '2020-06-02',
            title: 'Tuesday',
            start: new Date('2020-06-02'),
            end: new Date('2020-06-03')
          },
          {
            id: '2020-06-03',
            title: 'Wednesday',
            start: new Date('2020-06-03'),
            end: new Date('2020-06-04')
          },
          {
            id: '2020-06-04',
            title: 'Thursday',
            start: new Date('2020-06-04'),
            end: new Date('2020-06-05')
          },
          {
            id: '2020-06-05',
            title: 'Friday',
            start: new Date('2020-06-05'),
            end: new Date('2020-06-06')
          },
          {
            id: '2020-06-06',
            title: 'Saturday',
            start: new Date('2020-06-06'),
            end: new Date('2020-06-07')
          },
          {
            id: '2020-06-07',
            title: 'Sunday',
            start: new Date('2020-06-07'),
            end: new Date('2020-06-08')
          }
        ],
        style: {
          fontWeight: 'bold'
        }
      }
    ]}
    tracks={[
      {
        id: 'zoe',
        title: 'Zoe',
        elements: [
          {
            id: 'gardening',
            title: 'Gardening',
            start: new Date('2020-06-06T00:00:00'),
            end: new Date('2020-06-07T00:00:00'),
            style: {
              backgroundColor: 'green'
            }
          },
          {
            id: 'soft-play',
            title: 'Soft Play',
            start: new Date('2020-06-07T12:00:00'),
            end: new Date('2020-06-08'),
            style: {
              backgroundColor: 'blue'
            }
          }
        ]
      },
      {
        id: 'eva',
        title: 'Eva',
        elements: [
          {
            id: 'preschool-1',
            title: 'Preschool',
            start: new Date('2020-06-01T09:00:00'),
            end: new Date('2020-06-01T16:00:00'),
            style: {
              backgroundColor: '#f07'
            }
          }
        ]
      },
      {
        id: 'sarah',
        title: 'Sarah',
        elements: []
      },
      {
        id: 'will',
        title: 'Will',
        elements: [
          {
            id: 'work-1',
            title: 'Work',
            start: new Date('2020-06-01T08:00:00'),
            end: new Date('2020-06-01T16:00:00'),
            style: {
              backgroundColor: 'orange'
            }
          },
          {
            id: 'sleep-1',
            title: 'Sleep',
            start: new Date('2020-06-01T21:00:00'),
            end: new Date('2020-06-02T06:00:00'),
            style: {
              backgroundColor: '#666'
            }
          },
          {
            id: 'work-2',
            title: 'Work',
            start: new Date('2020-06-02T08:00:00'),
            end: new Date('2020-06-02T16:00:00'),
            style: {
              backgroundColor: 'orange'
            }
          },
          {
            id: 'work-3',
            title: 'Work',
            start: new Date('2020-06-03T08:00:00'),
            end: new Date('2020-06-03T16:00:00'),
            style: {
              backgroundColor: 'orange'
            }
          },
          {
            id: 'work-4',
            title: 'Work',
            start: new Date('2020-06-04T08:00:00'),
            end: new Date('2020-06-04T16:00:00'),
            style: {
              backgroundColor: 'orange'
            }
          },
          {
            id: 'work-5',
            title: 'Work',
            start: new Date('2020-06-05T08:00:00'),
            end: new Date('2020-06-05T16:00:00'),
            style: {
              backgroundColor: 'orange'
            }
          }
        ]
      },
    ]}
  />
)

export default Demo
 