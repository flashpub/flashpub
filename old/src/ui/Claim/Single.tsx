import React from 'react';
import Select from 'react-select';

import { Store } from 'src/modules/storage.module';
import { useDictionary } from 'src/hooks/use-dictionary';

export const Single: React.FC<any> = ({ item1 }) => {
  const cert = Store.react(Store.certificate);

  const dictionary = useDictionary(item1.filter, !!cert.data);

  React.useEffect(() => {
    if (dictionary.data) Store.dictionary.data = dictionary.data;
  }, [dictionary.data]);

  const dictionaryTerms = () => {
    const contents = [];
    dictionary.data?.map((content) => {
      contents.push({
        content,
        value: content.name,
        label: content.longName,
      });
    });
    return contents;
  };

  const onSelect = (props) => {
    Store.selectedTerm.data = props.content;
  };

  return (
    <div className="flex flex-col items-center w-full m-4 h-auto">
      <p className="mb-4 text-center">{item1.label}</p>
      <Select
        options={dictionaryTerms()}
        className="w-full"
        menuPosition="fixed"
        onChange={onSelect}
      />
    </div>
  );
};
