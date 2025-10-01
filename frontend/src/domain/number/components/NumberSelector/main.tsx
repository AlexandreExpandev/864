'use client';

import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Select } from '@/core/components/Select';
import { Spinner } from '@/core/components/Spinner';
import { useNumberList } from '../../hooks/useNumberList';
import { numberService } from '../../services/numberService';
import type { NumberSelectorProps } from './types';
import { numberSelectorVariants } from './variants';

/**
 * @component NumberSelector
 * @summary A component that allows users to select a number and displays its text representation.
 * @domain number
 * @type domain-component
 */
export const NumberSelector = ({ className }: NumberSelectorProps) => {
  // #region State
  const [selectedNumberId, setSelectedNumberId] = useState<number | null>(null);
  // #endregion

  // #region Hooks
  const { data: numbers, isLoading: isLoadingList, error: listError } = useNumberList();

  const { data: selectedNumber, isLoading: isLoadingDetail } = useQuery({
    queryKey: ['number', selectedNumberId],
    queryFn: () => numberService.getNumberById(selectedNumberId!),
    enabled: !!selectedNumberId, // Only run this query if a number is selected
  });
  // #endregion

  // #region Memos
  const selectOptions = useMemo(() => {
    if (!numbers) return [];
    return numbers.map((num) => ({ value: num.id, label: String(num.id) }));
  }, [numbers]);
  // #endregion

  // #region Styles
  const styles = numberSelectorVariants({ className });
  // #endregion

  // #region Render Logic
  if (isLoadingList) {
    return <Spinner size="large" />;
  }

  if (listError) {
    return <p className={styles.errorText()}>Failed to load numbers: {listError.message}</p>;
  }

  return (
    <div className={styles.base()}>
      <div className={styles.selectWrapper()}>
        <Select
          options={selectOptions}
          value={selectedNumberId}
          onChange={(id) => setSelectedNumberId(Number(id))}
          placeholder="Selecione um número..."
          aria-label="Number selection dropdown"
          size="large"
        />
      </div>
      <div className={styles.displayWrapper()}>
        {isLoadingDetail ? (
          <Spinner />
        ) : selectedNumber ? (
          <p className={styles.displayText()}>{selectedNumber.text}</p>
        ) : (
          <p className={styles.placeholderText()}>O texto aparecerá aqui</p>
        )}
      </div>
    </div>
  );
  // #endregion
};
