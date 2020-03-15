import React, { PureComponent } from 'react';
import ReactApexChart from 'react-apexcharts';
import Button from '@material-ui/core/Button';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/esm/locale';

import CardsTitleItems from '../../components/CardsTitleItems';
import HeaderTitle from '../../components/HeaderTitle';
import UnresolvedTicketsItems from '../../components/UnresolvedTicketsItems';
import CardsChart from '../../components/CardsChart';
import TasksItems from '../../components/TasksItems';
import Cards from '../../components/Cards';

import {
  Container,
  Content,
  ContainerCards,
  ContainerChart,
  ContainerCardsFooter,
  CreateNewTask
} from './styles';

class Overview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

      chart04: {
        options: {
          chart: {
            height: 500,
            type: 'area',
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [0, 4],
          },
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            onItemClick: {
              toggleDataSeries: true
            },
            onItemHover: {
                highlightDataSeries: true
            },
          },
          labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
          xaxis: {
            type: 'text',
          },
          yaxis: [
            {
              opposite: true,
              title: {
                text: '',
              },
            },
          ],
        },
        series: [
          {
            name: 'Today',
            type: 'area',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 59, 12, 16, 34, 43, 7, 9, 8, 11, 23, 21, 23, 43, 12],
          },
          {
            name: 'Everyday',
            type: 'area',
            data: [12, 34, 43, 7, 9, 8, 11, 23, 21, 23, 43, 23, 42, 35, 27, 43, 22, 17, 31, 22, 49, 12, 16],
          },
        ],
      },
    };
  }

  render() {

    return (
      <Container>
        <Content>
          <ContainerCards>
            <Cards>
              <CardsTitleItems title="Startups" />
              12.056
            </Cards>

            <Cards>
              <CardsTitleItems title="Investidores" />
              235
            </Cards>

            <Cards>
              <CardsTitleItems title="News Startups Day" />
              43
            </Cards>

            <Cards>
              <CardsTitleItems title="Close Starttups Day" />
              27
            </Cards>
          </ContainerCards>

          

          <ContainerChart>
            <div id="chart">
              <header>
                <h3>AI Grafic Results</h3>
                <span>{format(new Date(), 'dd/MMM/yyyy')}
                </span>
              </header>
              <ReactApexChart
                options={this.state.chart04.options}
                series={this.state.chart04.series}
                type="area"
                height={450}
                width={850}
              />
            </div>
            <article>
              <CardsChart title="Startups" info="12.056" />
              <CardsChart title="Investidores" info="235" />
              <CardsChart title="News Startups Day" info="43" />
              <CardsChart title="Close Startups Day" info="27" />
              <CardsChart title="AI Result Moment Day" info="94%" />
            </article>
          </ContainerChart>

          <ContainerCards>
            <Cards size="big">
              <HeaderTitle title="Startups" subtitle="em todos estados" link="overview" textLink="Details..." />
              <UnresolvedTicketsItems title="Technologia" number="5.784" />
              <UnresolvedTicketsItems title="Financeiro" number="4.560" />
              <UnresolvedTicketsItems title="Saúde e Beleza" number="2.984" />
              <UnresolvedTicketsItems title="outros" number="1.559" />
            </Cards>
            <Cards size="big">
              <HeaderTitle title="Investidores" subtitle="O que estão procurando" link="overview" textLink="Details..." />
              <UnresolvedTicketsItems title="Foods" number="4238" />
              <UnresolvedTicketsItems title="Saúde" number="1005" />
              <UnresolvedTicketsItems title="Entretenimentos" number="914" />
              <UnresolvedTicketsItems title="outros" number="281" />
            </Cards>
          </ContainerCards>

          <ContainerCardsFooter>
            <Cards size="big">
            <HeaderTitle title="Últimas Startups Cadastradas" subtitle="em todos estados" link="overview" textLink="Details..." />
              <UnresolvedTicketsItems title="AgroTech" number="RS" />
              <UnresolvedTicketsItems title="Dancing Days" number="RJ" />
              <UnresolvedTicketsItems title="Metro Fit" number="SP" />
              <UnresolvedTicketsItems title="Pending Food" number="ES" />
            </Cards>
            <Cards size="big">
            <HeaderTitle title="Startups desativadas" subtitle="em todos estados" link="overview" textLink="Details..." />
              <UnresolvedTicketsItems title="Exemplo01" number="RS" />
              <UnresolvedTicketsItems title="Exemplo02" number="RJ" />
              <UnresolvedTicketsItems title="Exemplo03" number="SP" />
              <UnresolvedTicketsItems title="Exemplo04" number="ES" />
            </Cards>
          </ContainerCardsFooter>
        </Content>
      </Container>
    );
  }

}

export default Overview;
