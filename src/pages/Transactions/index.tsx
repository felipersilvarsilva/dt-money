import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TansactionsContainer,
  TansactionsTable,
} from "./styles";

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />
      <TansactionsContainer>
        <SearchForm />
        <TansactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              </td>
              <td>venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              </td>
              <td>venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">conta de água </td>
              <td>
                <PriceHighlight variant="outcome">-R$ 12.000</PriceHighlight>
              </td>
              <td>venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              </td>
              <td>venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">lanches </td>
              <td>
                <PriceHighlight variant="outcome">-R$ 12.000</PriceHighlight>
              </td>
              <td>venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TansactionsTable>
      </TansactionsContainer>
    </div>
  );
}
