import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaSortAmountUp, FaEllipsisV } from 'react-icons/fa';

import {
  Container,
  Content,
  ContentHeader,
  ContainerTable,
} from './styles';

class Investors extends Component {
  render () {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <h3>All Investors</h3>
          <div>
            <span>
              <FaSortAmountUp
                size={12}
                color="#ddd"
                style={{ marginRight: 10 }}
              />
              Sort
            </span>
            <span>
              <FaFilter
                size={10}
                color='#ddd'
                style={{ marginRight: 10 }}
              />
              Filter
            </span>
          </div>
        </ContentHeader>

        <ContainerTable>
          <table>
            <thead>
              <th align="left" colSpan="2">Name</th>
              <th align="left">Interests</th>
              <th align="left">Date</th>
              <th align="center">&nbsp;</th>
            </thead>
            <tbody>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars1.githubusercontent.com/u/49542219?s=460&u=8a7fe9b47ca6b09374232e8cace190db15ae4a4c&v=4" alt="Sandro Romaniuc" />
                  </picture>
                </td>
                <td>
                  <label>Sandro Romaniuc</label>
                  <span>desde 23.02.2018</span>
                </td>
                <td>
                  <label>Financeiro, EFood, Monitoramento</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars3.githubusercontent.com/u/47038980?s=460&u=3b2f2a7182b5cd303d3237f3e28d66c1eb5ce8a5&v=4" alt="Reinaldo Neto" />
                  </picture>
                </td>
                <td>
                  <label>Reinaldo Neto</label>
                  <span>desde 03.05.2019</span>
                </td>
                <td>
                  <label>Saúde e Beleza, Esporte, EFood</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars0.githubusercontent.com/u/6500430?s=460&v=4" alt="Jr Dev" />
                  </picture>
                </td>
                <td>
                  <label>JR DEV</label>
                  <span>desde 03.05.2019</span>
                </td>
                <td>
                  <label>Viagens e Turismo, EFood, Música</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars2.githubusercontent.com/u/4835131?s=460&u=85ba5c6477e6788513830b762045cde33a5b482a&v=4" alt="Moises Lima" />
                  </picture>
                </td>
                <td>
                  <label>Moisés Lima</label>
                  <span>desde 03.05.2019</span>
                </td>
                <td>
                  <label>Monitoramento, EFood, Business</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars1.githubusercontent.com/u/49542219?s=460&u=8a7fe9b47ca6b09374232e8cace190db15ae4a4c&v=4" alt="Sandro Romaniuc" />
                  </picture>
                </td>
                <td>
                  <label>Sandro Romaniuc</label>
                  <span>desde 23.02.2018</span>
                </td>
                <td>
                  <label>Financeiro, EFood, Monitoramento</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars3.githubusercontent.com/u/47038980?s=460&u=3b2f2a7182b5cd303d3237f3e28d66c1eb5ce8a5&v=4" alt="Reinaldo Neto" />
                  </picture>
                </td>
                <td>
                  <label>Reinaldo Neto</label>
                  <span>desde 03.05.2019</span>
                </td>
                <td>
                  <label>Saúde e Beleza, Esporte, EFood</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars0.githubusercontent.com/u/6500430?s=460&v=4" alt="Jr Dev" />
                  </picture>
                </td>
                <td>
                  <label>JR DEV</label>
                  <span>desde 03.05.2019</span>
                </td>
                <td>
                  <label>Viagens e Turismo, EFood, Música</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars2.githubusercontent.com/u/4835131?s=460&u=85ba5c6477e6788513830b762045cde33a5b482a&v=4" alt="Moises Lima" />
                  </picture>
                </td>
                <td>
                  <label>Moisés Lima</label>
                  <span>desde 03.05.2019</span>
                </td>
                <td>
                  <label>Monitoramento, EFood, Business</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars1.githubusercontent.com/u/49542219?s=460&u=8a7fe9b47ca6b09374232e8cace190db15ae4a4c&v=4" alt="Sandro Romaniuc" />
                  </picture>
                </td>
                <td>
                  <label>Sandro Romaniuc</label>
                  <span>desde 23.02.2018</span>
                </td>
                <td>
                  <label>Financeiro, EFood, Monitoramento</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars3.githubusercontent.com/u/47038980?s=460&u=3b2f2a7182b5cd303d3237f3e28d66c1eb5ce8a5&v=4" alt="Reinaldo Neto" />
                  </picture>
                </td>
                <td>
                  <label>Reinaldo Neto</label>
                  <span>desde 03.05.2019</span>
                </td>
                <td>
                  <label>Saúde e Beleza, Esporte, EFood</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars0.githubusercontent.com/u/6500430?s=460&v=4" alt="Jr Dev" />
                  </picture>
                </td>
                <td>
                  <label>JR DEV</label>
                  <span>desde 03.05.2019</span>
                </td>
                <td>
                  <label>Viagens e Turismo, EFood, Música</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars2.githubusercontent.com/u/4835131?s=460&u=85ba5c6477e6788513830b762045cde33a5b482a&v=4" alt="Moises Lima" />
                  </picture>
                </td>
                <td>
                  <label>Moisés Lima</label>
                  <span>desde 03.05.2019</span>
                </td>
                <td>
                  <label>Monitoramento, EFood, Business</label>
                  <span>on 24.05.2020</span>
                </td>
                <td>
                  <label>March 11, 2020</label>
                  <span>20:14 pm</span>
                </td>
                <td align="center">
                  <FaEllipsisV
                    size={20}
                    color="#ddd"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </ContainerTable>
      </Content>
    </Container>
  );
  }
}


export default Investors;