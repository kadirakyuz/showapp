 

export const sortByName = (data: ({ Tur: string; Id: number; Adi: string; EtkinlikBitisTarihi: string; KucukAfis: string; EtkinlikMerkezi: string; EtkinlikMerkeziKonum: string; KisaAciklama: string; BiletSatisLinki: null; UcretsizMi: boolean; Resim: string; EtkinlikUrl: string; EtkinlikBaslamaTarihi: string; } | { Tur: string; Id: number; Adi: string; EtkinlikBitisTarihi: string; KucukAfis: string; EtkinlikMerkezi: string; EtkinlikMerkeziKonum: string; KisaAciklama: string; BiletSatisLinki: string; UcretsizMi: boolean; Resim: string; EtkinlikUrl: string; EtkinlikBaslamaTarihi: string; })[], hasSort: boolean) => {
    let sortedData = [...data];
    if (!hasSort) {
      sortedData.sort((a, b) => a.Adi.localeCompare(b.Adi));
    } else {
      sortedData.sort((a, b) => b.Adi.localeCompare(a.Adi));
    }
    return sortedData;
  };
  
  export const sortByDate = (data: ({ Tur: string; Id: number; Adi: string; EtkinlikBitisTarihi: string; KucukAfis: string; EtkinlikMerkezi: string; EtkinlikMerkeziKonum: string; KisaAciklama: string; BiletSatisLinki: null; UcretsizMi: boolean; Resim: string; EtkinlikUrl: string; EtkinlikBaslamaTarihi: string; } | { Tur: string; Id: number; Adi: string; EtkinlikBitisTarihi: string; KucukAfis: string; EtkinlikMerkezi: string; EtkinlikMerkeziKonum: string; KisaAciklama: string; BiletSatisLinki: string; UcretsizMi: boolean; Resim: string; EtkinlikUrl: string; EtkinlikBaslamaTarihi: string; })[], hasSort: boolean) => {
    let sortedData = [...data];
    if (!hasSort) {
      sortedData.sort((a, b) =>
        a.EtkinlikBaslamaTarihi.localeCompare(b.EtkinlikBaslamaTarihi)
      );
    } else {
      sortedData.sort((a, b) =>
        b.EtkinlikBaslamaTarihi.localeCompare(a.EtkinlikBaslamaTarihi)
      );
    }
    return sortedData;
  };
  
  export const sortByPrice = (data: ({ Tur: string; Id: number; Adi: string; EtkinlikBitisTarihi: string; KucukAfis: string; EtkinlikMerkezi: string; EtkinlikMerkeziKonum: string; KisaAciklama: string; BiletSatisLinki: null; UcretsizMi: boolean; Resim: string; EtkinlikUrl: string; EtkinlikBaslamaTarihi: string; } | { Tur: string; Id: number; Adi: string; EtkinlikBitisTarihi: string; KucukAfis: string; EtkinlikMerkezi: string; EtkinlikMerkeziKonum: string; KisaAciklama: string; BiletSatisLinki: string; UcretsizMi: boolean; Resim: string; EtkinlikUrl: string; EtkinlikBaslamaTarihi: string; })[], hasSort: boolean) => {
    let sortedData = [...data];
    if (!hasSort) {
      sortedData.sort((a, b) =>
        a.UcretsizMi === b.UcretsizMi ? 0 : a.UcretsizMi ? -1 : 1
      );
    } else {
      sortedData.sort((a, b) =>
        b.UcretsizMi === a.UcretsizMi ? 0 : b.UcretsizMi ? -1 : 1
      );
    }
    return sortedData;
  };
  