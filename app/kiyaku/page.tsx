"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';

import { subTheme } from '../../styles/theme'
import ThemeWrapper from '../../styles/ThemeWrapper';

const Kiyaku = () => {
  return (
    <ThemeWrapper theme={subTheme}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" margin="0 20vh 0 20vh">
        <Typography variant="h3" margin="11vh" marginBottom="3vh">利用規約</Typography>
        <Typography marginBottom="20px">この利用規約（以下，「本規約」といいます。）は，本サービス運営者（以下，「当方」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。</Typography>
        <Typography variant="h5" marginBottom="20px">第1条（適用）</Typography>
        <Typography>
          本規約は，ユーザーと当方との間の本サービスの利用に関わる一切の関係に適用されるものとします。
          当方は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。
          これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第2条（利用登録）</Typography>
        <Typography>
          本サービスにおいては，登録希望者が本規約に同意の上，当方の定める方法によって利用登録を申請し，当方がこれを承認することによって，利用登録が完了するものとします。
          当方は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。          
          <Typography>・利用登録の申請に際して虚偽の事項を届け出た場合</Typography>
          <Typography>・本規約に違反したことがある者からの申請である場合</Typography>
          <Typography>・その他，当方が利用登録を相当でないと判断した場合</Typography>
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第3条（ユーザー名およびパスワードの管理）</Typography>
        <Typography>
          ユーザーは，自己の責任において，本サービスのユーザー名およびパスワードを適切に管理するものとします。
          ユーザーは，いかなる場合にも，ユーザー名およびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。
          当方は，ユーザー名とパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザー名を登録しているユーザー自身による利用とみなします。
          ユーザー名及びパスワードが第三者によって使用されたことによって生じた損害は，当方に故意又は重大な過失がある場合を除き，当方は一切の責任を負わないものとします。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第4条（利用料金および支払方法）</Typography>
        <Typography>
          ユーザーは，本サービスの利用は無料です。
          ユーザーは，本サービスの有料部分が将来導入される場合に備え、その際に定められる利用料金を支払うものとします。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第5条（禁止事項）</Typography>
        <Typography>
          ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
          <Typography>・法令または公序良俗に違反する行為</Typography>
          <Typography>・犯罪行為に関連する行為</Typography>
          <Typography>・本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為</Typography>
          <Typography>・当方，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為</Typography>
          <Typography>・本サービスによって得られた情報を商業的に利用する行為</Typography>
          <Typography>・当方のサービスの運営を妨害するおそれのある行為</Typography>
          <Typography>・不正アクセスをし，またはこれを試みる行為</Typography>
          <Typography>・他のユーザーに関する個人情報等を収集または蓄積する行為</Typography>
          <Typography>・不正な目的を持って本サービスを利用する行為</Typography>
          <Typography>・本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為</Typography>
          <Typography>・他のユーザーに成りすます行為</Typography>
          <Typography>・当方が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為</Typography>
          <Typography>・面識のない異性との出会いを目的とした行為</Typography>
          <Typography>・当方のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為</Typography>
          <Typography>・その他，当方が不適切と判断する行為</Typography>
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第6条（本サービスの提供の停止等）</Typography>
        <Typography>
          当方は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
          <Typography>・本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</Typography>
          <Typography>・地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</Typography>
          <Typography>・コンピュータまたは通信回線等が事故により停止した場合</Typography>
          <Typography>・その他，当方が本サービスの提供が困難と判断した場合</Typography>
          当方は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第7条（利用制限および登録抹消）</Typography>
        <Typography>
          当方は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。
          <Typography>・本規約のいずれかの条項に違反した場合</Typography>
          <Typography>・登録事項に虚偽の事実があることが判明した場合</Typography>
          <Typography>・料金等の支払債務の不履行があった場合</Typography>
          <Typography>・当方からの連絡に対し，一定期間返答がない場合</Typography>
          <Typography>・本サービスについて，最終の利用から一定期間利用がない場合</Typography>
          <Typography>・その他，当方が本サービスの利用を適当でないと判断した場合</Typography>
          当方は，本条に基づき当方が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第8条（ユーザー登録情報の削除）</Typography>
        <Typography>
          ユーザーは，当方の定める手続により，本サービスからユーザー登録情報の削除を申請できるものとします。
          当方は，ユーザーからの削除申請を受領した後，速やかに対応するものとします。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第9条（保証の否認および免責事項）</Typography>
        <Typography>
          当方は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。当方は，本サービスに起因してユーザーに生じたあらゆる損害について，当方の故意又は重過失による場合を除き，一切の責任を負いません。ただし，本サービスに関する当方とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
          前項ただし書に定める場合であっても，当方は，当方の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当方またはユーザーが損害発生につき予見し，又は予見し得た場合を含みます。）について一切の責任を負いません。また，当方の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
          当方は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第10条（サービス内容の変更等）</Typography>
        <Typography>
          当方は，ユーザーへの事前の告知をもって，本サービスの内容を変更，追加または廃止することがあり，ユーザーはこれを承諾するものとします。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第11条（利用規約の変更）</Typography>
        <Typography>
          当方は以下の場合には，ユーザーの個別の同意を要せず，本規約を変更することができるものとします。
          <Typography>・本規約の変更がユーザーの一般の利益に適合するとき。</Typography>
          <Typography>・本規約の変更が本サービス利用契約の目的に反せず，かつ，変更の必要性，変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。</Typography>
          当方はユーザーに対し，前項による本規約の変更にあたり，事前に，本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第12条（個人情報の取扱い）</Typography>
        <Typography>
          当方は，本サービスの利用によって取得する個人情報については，当方「プライバシーポリシー」に従い適切に取り扱うものとします。
          当方は，ユーザーの個人情報を適切に管理し，第三者に提供することはありません。
          また，当方は，ユーザーの個人情報の保護に最大限の注意を払っていますが，完全な安全性を保証するものではありません。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第13条（通知または連絡）</Typography>
        <Typography>
          ユーザーと当方との間の通知または連絡は，当方の定める方法によって行うものとします。
          当方は，ユーザーから，当方が別途定める方式に従った変更届け出がない限り，現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い，これらは，発信時にユーザーへ到達したものとみなします。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第14条（権利義務の譲渡の禁止）</Typography>
        <Typography>
          ユーザーは，当方の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第15条（準拠法・裁判管轄）</Typography>
        <Typography>
          本規約の解釈にあたっては，日本法を準拠法とします。本サービスに関して紛争が生じた場合には，当方の本店所在地を管轄する裁判所を専属的合意管轄とします。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第16条（クッキーおよび追跡技術の使用）</Typography>
        <Typography>
          当方は，本サービスの向上およびユーザー体験の最適化を図るため，クッキーおよびその他の追跡技術を使用することがあります。
          これに同意しない場合は，ブラウザの設定を変更することでクッキーを無効にすることができます。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第17条（コンテンツの使用権）</Typography>
        <Typography>
          ユーザーが本サービスに投稿したコンテンツについて，ユーザーは当方に対し，非独占的，無償，永久的，取消不能の使用権を許諾するものとします。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第18条（サービスの変更および終了）</Typography>
        <Typography>
          当方は，ユーザーへの事前の告知をもって，本サービスの内容を変更，追加または終了することができるものとします。
          これによりユーザーに生じた不利益や損害については，一切の責任を負いません。
        </Typography>
        <Typography variant="h5" marginTop="20px" marginBottom="20px">第19条（反社会的勢力の排除）</Typography>
        <Typography>
        ユーザーは，本サービスの利用において，暴力団，暴力団関係企業，総会屋，社会運動等標榜ゴロまたは特殊知能暴力集団等その他これに準ずる者（以下「反社会的勢力」といいます。）に該当しないことを表明し，保証するものとします。当方は，ユーザーが反社会的勢力に該当することが判明した場合，直ちに本サービスの利用を停止または登録を抹消することができるものとします。
        </Typography>
        <Typography marginBottom="10vh">以上</Typography>
      </Box>
    </ThemeWrapper>
  );
};

export default Kiyaku;