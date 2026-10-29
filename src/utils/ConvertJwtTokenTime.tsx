/**
 * @exp //Valor reebido para conversão
 * @return valor retornado já convertido
 */

export function JwtTokenTime(exp: number): number {
  const currenTime = Math.floor(Date.now() / 1000);
  const secondUntilExpiration = exp - currenTime;
  const secondsInDay = 60 * 60 * 24;
  const daysUntilExpiration = secondUntilExpiration / secondsInDay;
  return daysUntilExpiration;
}
export default JwtTokenTime;
