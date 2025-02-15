export type DeepRecord<K extends string, V> = {
  [P in K]: V | DeepRecord<K, V>;
};




