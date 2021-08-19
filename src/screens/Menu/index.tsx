import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, Text } from 'react-native';
import { CategoryButton } from '../../components/CategoryButton';
import { Header } from '../../components/Header';
import { HighlightCard } from '../../components/HighlightCard';
import { ProductCard } from '../../components/ProductCard';
import { TitleList } from '../../components/TitleList';
import api from '../../services/api';
import { Container, HighlightTitle, Content } from './styles';

interface CategoriesProps {
  id: string;
  categoria: string;
}

interface CompanyProps {
  imagemLogo: string;
  imagemFundo: string;
  disponibilidade: number;
  horaDisponibilidade: string;
  nomeEmpresa: string;
  tempoEstimadoMin: string;
  tempoEstimadoMax: string;
}

interface HighlightProps {
  id: string;
  imagem: string;
  titulo: string;
  descricao?: string;
  precoCheio?: string;
  precoFinal: string;
}

interface ProductsProps {
  id: string;
  uriImagem?: string;
  tituloProduto: string;
  descProduto?: string;
  precoFinal: string;
  precoCheio?: string;
  categoria: string;
}

interface OrganizedProductsProps {
  products: ProductsProps[];
}

export function Menu() {
  const [company, setCompany] = useState<CompanyProps>({} as CompanyProps);
  const [categories, setCategories] = useState<CategoriesProps[]>([]);
  const [highlights, setHighlights] = useState<HighlightProps[]>([]);
  const [productsData, setProductsData] = useState<ProductsProps[]>([]);
  const [organizedProducts, setOrganizedProducts] = useState<OrganizedProductsProps[]>([]);
  const [categorySelected, setCategorySelected] = useState('');
  const [loading, setLoading] = useState(true);

  function handleActiveCategory(category: string) {
    setCategorySelected(category);
  }

  useEffect(() => {
    async function fetchProductsProps() {
      const { data } = await api.get('produtos');
      setProductsData(data);
    }

    async function fetchCategories() {
      const { data } = await api.get('categorias_produtos');
      setCategories(data);
    }

    async function fetchCompanyProps() {
      const { data } = await api.get('empresa_props');
      setCompany(data);
    }

    async function fetchHighlightsProps() {
      const { data } = await api.get('produtos_destaques');
      setHighlights(data);
    }

    fetchCategories();
    fetchCompanyProps();
    fetchHighlightsProps();
    fetchProductsProps();
  }, []);

  useEffect(() => {
    organizeProducts(productsData);
  }, [productsData]);

  function organizeProducts(productsData: ProductsProps[]) {
    const categoryExtracted = productsData.map((item) => {
      const itemCategory = item.categoria;
      return itemCategory;
    });

    const categories = categoryExtracted.filter((item, i) => categoryExtracted.indexOf(item) === i);

    console.log(productsData.length);
    let organizeProducts: OrganizedProductsProps[] = [];

    categories.map((category) => {
      let categoryOrganize: ProductsProps[] = [];

      productsData.map((productsData) => {
        if (category === productsData.categoria) {
          const newProduct = {
            id: productsData.id,
            uriImagem: productsData.uriImagem,
            tituloProduto: productsData.tituloProduto,
            descProduto: productsData.descProduto,
            precoFinal: productsData.precoFinal,
            precoCheio: productsData.precoCheio,
            categoria: productsData.categoria,
          } as ProductsProps;

          categoryOrganize.push(newProduct);
        }
      });
      if (categoryOrganize.length > 0) {
        organizeProducts.push({
          products: categoryOrganize,
        });
      }
    });
    setOrganizedProducts(organizeProducts);
    console.log('########### Resultado ###########');
    console.log(organizedProducts);
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4FFF8" translucent />
      <Header
        horaDisponibilidade={company.horaDisponibilidade}
        disponibilidade={company.disponibilidade}
        nomeEmpresa={company.nomeEmpresa}
        tempoEstimadoMin={company.tempoEstimadoMin}
        tempoEstimadoMax={company.tempoEstimadoMax}
        imagemLogo={company.imagemLogo}
        imagemFundo={company.imagemFundo}
      />
      <Content>
        <HighlightTitle>Destaques</HighlightTitle>
        <FlatList
          data={highlights}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => (
            <HighlightCard
              imagem={item.imagem}
              titulo={item.titulo}
              descricao={item.descricao}
              precoCheio={item.precoCheio}
              precoFinal={item.precoFinal}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          keyExtractor={(item) => item.id}
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <CategoryButton
              categoria={item.categoria}
              active={item.id === categorySelected}
              onPress={() => handleActiveCategory(item.id)}
            />
          )}
        />
        {organizedProducts.map(({ products }) => (
          <FlatList
            ListHeaderComponent={() => <TitleList title={products[0].categoria} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={products}
            renderItem={({ item }) => (
              <ProductCard
                uriImagem={item.uriImagem}
                tituloProduto={item.tituloProduto}
                descProduto={item.descProduto}
                precoFinal={item.precoFinal}
                precoCheio={item.precoCheio}
              />
            )}
          />
        ))}
      </Content>
    </Container>
  );
}
