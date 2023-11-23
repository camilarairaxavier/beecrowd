--O setor financeiro precisa de um relatório sobre os fornecedores dos produtos que vendemos. 
--Os relatórios contemplam todas as categorias, mas por algum motivo, os fornecedores dos produtos 
-- cuja categoria é a executiva, não estão no relatório.
--Seu trabalho é retornar os nomes dos produtos e dos fornecedores cujo código da categoria é 6.

select
	pd.name, pr.name
from
	products pd , providers pr, categories c  
where
	pr.id = pd.id_providers 
and
	pd.id_categories = c.id
and  
	c.id = 6