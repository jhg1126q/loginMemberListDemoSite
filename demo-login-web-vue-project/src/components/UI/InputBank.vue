<template>
    <v-container class="container">
        <v-row>
            <v-col cols="12">
                <h2 class="white--text">계좌번호 테스트</h2>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <v-responsive class="mx-auto" max-width="344">
                    <v-text-field :rules="rules" type="text" label="계좌번호" placeholder="숫자만 입력 가능합니다"
                        v-model="accountNumber" @input="predictBank" maxlength="20" />
                </v-responsive>
            </v-col>
        </v-row>

        <v-row class="white--text my-4">
            <v-col cols="12">
                <p>은행명</p>
                <v-chip v-for="item in bankName" :key="item.bankCode" @click="chipClickHandler(item)">{{ item.bankName }}</v-chip>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <v-select :items="bankpatternsArr" item-title="bankName" return-object single-line item-value="bankCode"
                    label="은행 선택" v-model="selectedBank">
                </v-select>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <v-btn color="primary" @click="showBottomSheet = true">
                    은행 계좌 목록 보기
                </v-btn>
            </v-col>
        </v-row>

        <v-bottom-sheet v-model="showBottomSheet">
            <v-card class="text-center" height="200">
                <v-card-text>
                    <v-list-item v-for="(item) in bankpatternsArr" :key="item.bankCode">
                        {{ item.bankName }}
                    </v-list-item>
                </v-card-text>
            </v-card>
        </v-bottom-sheet>
    </v-container>
</template>
  
  <script setup>
    import { ref } from "vue";

    const accountNumber = ref('');
    const bankName =  ref([]);
    const rules = [value => (value && value.length >= 7) || '최소 7자리를 입력해주셔야합니다.'];
    const selectedBank = ref('');
    const showBottomSheet = ref(false);

    const bankpatternsArr = [
        {
            bankCode: '001',
            bankName: '산업은행',
            pattern: /^\d{3}(13|20|19|11|22)\d{6}$|^(013|020|010|019|011|022)\d{11}$/,
            order: 0
        },
        {
            bankCode: '002',
            bankName: '기업은행',
            pattern: /^\d{3}(01|02|03|13|07|06|04)\d{7}$|^\d{9}(01|02|03|13|07|06|04)\d{3}$/,
            order: 0
        }, {
            bankCode: '003',
            bankName: '국민은행',
            pattern: /^0\d{9}$|0\d{10}$|9\d{10}$|^\d{3}(01|21|24|05|04|25|26)\d{7}$|^\d{4}92\d{8}$|^\d{4}(06|18)\d{6}$|^\d{4}(01|02|25|37|90)\d{8}$/,
            order: 0
        }, {
            bankCode: '004',
            bankName: '하나은행',
            pattern: /^\d{3}(13|33|18|38|19|39|26|11|22)\d{6}$|^(611|610|620|600|601|630|621|631)\d{6}$|^\d{12}(05|07|08|02|01|04|94|37|60)$/,
            order: 0
        }, {
            bankCode: '005',
            bankName: '수협은행',
            pattern: /^\d{3}(01|02|06|08|03|13|61|62|63|67)\d{6}$|^(101|201|102|202|209|103|208|106|108|113|114|206|167)\d{6}$|^0\d{11}$|^\d{3}40\d{9}$/,
            order: 0
        }, {
            bankCode: '006',
            bankName: '농협은행',
            pattern: /^\d{3}(01|02|12|06|05|17|04|10|14|21|24|34|45|47|49|59|80|28|31|43|46|79|81|86|87|88)\d{6}$|^\d{4}(01|02|12|06|05|17|04|10|14|21|24|34|45|47|49|59|80|28|31|43|46|79|81|86|87|88)\d{6}$|^(301|302|312|306|305|317|304|310|314|321|324|334|345|347|349|359|380|028|031|043|046|079|081|086|087|088)\d{7}$|^\d{6}(64|65)\d{6}$|^(790|791)\d{11}$/,
            order: 0
        }, {
            bankCode: '007',
            bankName: '농협중앙회',
            pattern: /^(351|352|356|355|354|360|384|394|398|028)\d{8}$|^\d{6}(51|52|56|55)\d{6}$|^792\d{11}$/,
            order: 0
        }, {
            bankCode: '008',
            bankName: '우리은행',
            pattern: /^\d(006|007|002|004|003|005)\d{8}$|^\d{9}(18|92)\d{3}$|^\d{3}(05|06|07|08|02|01|04)\d{6}$|^\d{9}(01|15|02|12|04|03|13)\d{3}$|^\d{3}(01|21|24|05|04|25|09)\d{6}$/,
            order: 0
        }, {
            bankCode: '009',
            bankName: 'SC제일은행',
            pattern: /^\d{3}(10|20|30|15)\d{6}$|^\d{3}16\d{9}$/,
            order: 0
        }, {
            bankCode: '010',
            bankName: '한국씨티은행',
            pattern: /^\d{8}(01|11|21|25|31|42|51|71|81|23|05|06|15|26|29|07|27|55|03|13|33|41|43|53|63|24|99)\d{3}$|^\d{8}(25|41)\d{2}$|^\d{8}(01|11|21|25|31|42|51|71|81|23|05|06|15|26|29|07|27|55|03|13|33|41|43|53|63|24|99)\d{1}$|^[5|0]\d{9}$|^\d{2}(20|21|32|34|36|37|38|42|46|70|71|73|74|75|76|77|78|80|81|83|84|85|86|87|88|91|92|93|94|95|96|99|30|33|35|41|42|43|45|50|58|63|64|60|61|62|65|66|67|68|69|00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|59|40|48)\d{6}$/,
            order: 0
        }, {
            bankCode: '011',
            bankName: '대구은행',
            pattern: /^\d{3}(05|10|07|08|02|01|04|12|06|13|14)\d{6}$|^\d{3}(05|07|08|02|01|04)\d{7}$|^(505|058|502|501|504)\d{7}$|^\d{3}(05|06|07|08|02|01|04)\d{9}$/,
            order: 0
        }, {
            bankCode: '012',
            bankName: '부산은행',
            pattern: /^\d{3}(01|02|12|03|09|13|11)\d{7}$|^(101|102|112|103|109|113)\d{7}$/,
            order: 0
        }, {
            bankCode: '013',
            bankName: '광주은행',
            pattern: /^\d{3}(107|108|109|121|123|124|122|103|101|127|716|731)\d{6}$|^\d(107|109|121|103|101|127)\d{7}$/,
            order: 0
        }, {
            bankCode: '014',
            bankName: '제주은행',
            pattern: /^\d{3}(01|02|03|04|05|13)\d{5}$|^(700|701|702|703|704|705|706|770|771|772|773|774|775|776|777|778|779|769|711|712|713|714)\d{6}$/,
            order: 0
        }, {
            bankCode: '015',
            bankName: '전북은행',
            pattern: /^\d{3}(02|13|15|21|22|35|37|03|12|01|11|23|36)\d{7}$|^\d(013|021|012|011|023)\d{7}$/,
            order: 0
        }, {
            bankCode: '016',
            bankName: '경남은행',
            pattern: /^\d{3}(07|09|21|22|03|01|35)\d{7}$|^(207|209|221|222|203|201|235)\d{7}$/,
            order: 0
        }, {
            bankCode: '017',
            bankName: '경남은행',
            pattern: /^\d{3}(07|09|21|22|03|01|35)\d{7}$|^(207|209|221|222|203|201|235)\d{7}$/,
            order: 0
        }, {
            bankCode: '018',
            bankName: '새마을금고',
            pattern: /^\d{4}(09|10|13)\d{7}$|^9(002|003|004|005|037|206|207|210|200|202|025|208|209|212)\d{7}$/,
            order: 0
        }, {
            bankCode: '019',
            bankName: '신한은행',
            pattern: /^(10[0-9]|16[0-1]|1[1-3][0-9]|15[5-9]|15[0-4]|14[0-9]|298|268|269)\d{9}$|^(560|561|562)\d{11}$|^\d{3}(01|09|61|04|05|06|08|02|07|03)\d{6}$|^\d{3}(81|82)\d{8}$|^\d{3}(01|02|11|13|12|03|04|05|99)\d{6}$|^\d{3}901\d{8}$/,
            order: 0
        }, {
            bankCode: '020',
            bankName: 'K뱅크',
            pattern: /^\d{10}$|^\d{12}$|^\d{14}$|^\d{2}(010|011|016)\d{7}$/,
            order: 0
        }, {
            bankCode: '021',
            bankName: '카카오뱅크',
            pattern: /^(333)\d{10}$/,
            order: 0
        }, {
            bankCode: '022',
            bankName: '토스',
            pattern: /^\d{12}$/,
            order: 0
        }, {
            bankCode: '023',
            bankName: 'KB증권',
            pattern: /^\d{3}(01|06|07|10|11|12|16|30|40|45|50|55|6[1-9])\d{6}$|^\d{9}$/,
            order: 0
        }, {
            bankCode: '024',
            bankName: '삼성증권',
            pattern: /^\d{8}$|^\d{10}$|^\d{12}$|^\d{14}$/,
            order: 0
        },
    ]

    function predictBank (event) {
        bankName.value.length = 0;
        const numbersOnly = event.target.value.replace(/\D/g, '');
        accountNumber.value = numbersOnly;

        for (const list of bankpatternsArr) {
            if (list.pattern.test(accountNumber.value)) {
                bankName.value.push(list);
            }
        }
    }

    function chipClickHandler (item) {
        selectedBank.value = item
    }

  </script>
<style>
.dragArea {
    /* Adds padding around the draggable area */
    padding: 10px;

    /* Adds a border to the draggable area */
    border: 1px solid #e0e0e0;
    border-radius: 4px;

    /* Adds a background color */
    background-color: #f9f9f9;

    /* Adds a shadow for depth (optional) */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    /* Spacing between list items */
    margin-bottom: 10px;
}

/* Styles for each draggable item */
.dragArea .v-list-item {
    /* Adds margin and padding for each item */
    margin: 5px 0;
    padding: 10px;

    /* Adds a border and radius */
    border: 1px solid #ccc;
    border-radius: 4px;

    /* Changes the background color on hovering */
    transition: background-color 0.3s ease;
}

.dragArea .v-list-item:hover {
    background-color: #e0e0e0;
}
.container {
    padding: 10px;
    margin: 5px 0;
}
.white--text {
    color: white;
}
</style>