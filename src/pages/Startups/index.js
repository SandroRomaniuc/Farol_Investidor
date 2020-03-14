import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaSortAmountUp, FaEllipsisV } from 'react-icons/fa';

import {
  Container,
  Content,
  ContentHeader,
  ContainerTable,
} from './styles';

export default function Startups() {
  return (
    <Container>
      <Content>
        <ContentHeader>
          <h3>All Startups</h3>
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
              <th align="left">Category</th>
              <th align="left">Date</th>
              <th align="left">Status</th>
              <th align="center">&nbsp;</th>
            </thead>
            <tbody>
              <tr>
                <td width="50px">
                  <picture>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSypW5lZOITsj6UWKH4yT_jpNpFQQLOZ31DI4KkeywszD5Hz41N" alt="Stone Pagamentos" />
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
                <td align="left">
                  <Link to="/">Active</Link>
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSakGAYmX0onKlSnQ-6OoMohtdDeeuDyiTodOuAQnGz-dxLve0v" alt="Gama Academy" />
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
                <td align="left">
                  <Link to="/">Active</Link>
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
                <td align="left">
                  <Link to="/">Active</Link>
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
                <td align="left">
                  <Link to="/">Active</Link>
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
                <td align="left">
                  <Link to="/">Active</Link>
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
