import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaSortAmountUp, FaEllipsisV } from 'react-icons/fa';

import {
  Container,
  Content,
  ContentHeader,
  ContainerTable,
} from './styles';

export default function Investors() {
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
              <th align="left">Startups</th>
              <th align="left">Date</th>
              <th align="center">&nbsp;</th>
            </thead>
            <tbody>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://avatars1.githubusercontent.com/u/49542219?s=460&u=8a7fe9b47ca6b09374232e8cace190db15ae4a4c&v=4" alt="Stone Pagamentos" />
                  </picture>
                </td>
                <td>
                  <label>Stone Pagamentos</label>
                  <span>Updated 1 hour ago</span>
                </td>
                <td>
                  <label>Financeiro</label>
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
                    <img src="https://avatars3.githubusercontent.com/u/47038980?s=460&u=3b2f2a7182b5cd303d3237f3e28d66c1eb5ce8a5&v=4" alt="Gama Academy" />
                  </picture>
                </td>
                <td>
                  <label>Gama Academy</label>
                  <span>Updated 6 hour ago</span>
                </td>
                <td>
                  <label>Saúde e Beleza</label>
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-5GlYfyaC1kog3rNF1xqTIp9Zfu7OTZHwhqSmkAfvY-YnyYAy" alt="CNA Brasil" />
                  </picture>
                </td>
                <td>
                  <label>CNA Brasil</label>
                  <span>Updated 11 hour ago</span>
                </td>
                <td>
                  <label>Monitoramento</label>
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROPwBcPR831NuBmVse1MUSx6bKINs7w-MFh8wqEUAtukiHLvGJ" alt="logo Arco" />
                  </picture>
                </td>
                <td>
                  <label>Arco</label>
                  <span>Updated 15 hour ago</span>
                </td>
                <td>
                  <label>Educação</label>
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrYsiYpFBdpHn_o1Rd8Ez3sIFeSjzCiZgsXenK3ceRrXhezFe4" alt="logo Shippify" />
                  </picture>
                </td>
                <td>
                  <label>Shippfy</label>
                  <span>Updated 1 day ago</span>
                </td>
                <td>
                  <label>Transporte e IFood</label>
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
