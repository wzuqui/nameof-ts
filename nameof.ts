interface IUnidade {
    id: string;
    apelido: string;
    nome: string;
}

interface IHierarquiaOrganizacional {
    id: string;
    unidade: IUnidade;
}

interface IPessoa {
    id: number;
    hierarquiaOrganizacional: IHierarquiaOrganizacional;
}

function cleanseAssertionOperators(parsedName: string): string {
    return parsedName;
}

function nameof<T, TOut = unknown>(selector: (element: T) => TOut): string {
    const selectorString = selector.toString();

    if (selectorString.includes("=>")) {
        const propertySelector = selectorString.substring(selectorString.indexOf(".") + 1);
        return propertySelector.replace(/[?!]/g, "");
    }
    throw new Error("nameof: Invalid function.");
}


const path = nameof<IPessoa>(p => p.hierarquiaOrganizacional.unidade.apelido);
console.clear();
console.log(path);
